import db from "../firestore";
import firebase from "firebase";
import {
  CustomerInterface,
  CustomerListInterface,
  ExistingCustomerInterface,
} from "../interfaces/customerInterface";
import { useContext, useState } from "react";
import { useSnackbar } from "notistack";
import { setLoading, unsetLoading } from "../actions";
import { LoadingContext } from "../context";

const useFirestore = () => {
  type DocumentReference = firebase.firestore.DocumentReference;

  const [customers, setCustomers] = useState<CustomerListInterface>();
  const { enqueueSnackbar } = useSnackbar();
  const { dispatch } = useContext(LoadingContext);

  const addCustomer = (data: CustomerInterface) => {
    setLoading(dispatch);
    db.collection("customers")
      .add(data)
      .then((docRef: DocumentReference) => {
        console.log(docRef.id);
        enqueueSnackbar("Customer Added Successfully!", { variant: "success" });
        unsetLoading(dispatch);
      })
      .catch((error: string) => {
        console.log(error);
        enqueueSnackbar(error, { variant: "error" });
      });
  };

  const getCustomerList = () => {
    let flag = 0;
    setLoading(dispatch);
    let unsubscribe: Function = db.collection("customers").onSnapshot(
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            console.log(change.doc.data());
            setCustomers((state: CustomerListInterface | undefined) => {
              let tempState = { ...state };
              tempState[change.doc.id] = change.doc.data() as CustomerInterface;
              return tempState;
            });
          }
          if (change.type === "modified") {
            console.log("modified " + JSON.stringify(change.doc.data()));
            setCustomers((state: CustomerListInterface | undefined) => {
              let tempState = { ...state };
              tempState[change.doc.id] = change.doc.data() as CustomerInterface;
              return tempState;
            });
          }
          if (change.type === "removed") {
            console.log(change.doc.data());
            setCustomers((state: CustomerListInterface | undefined) => {
              let tempState = { ...state };
              delete tempState[change.doc.id];
              return tempState;
            });
          }
          if (flag == 0) {
            flag = 1;
            unsetLoading(dispatch);
          }
        });
      },
      (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
        unsetLoading(dispatch);
      }
    );
    return unsubscribe;
  };

  const updateCustomer = (data: ExistingCustomerInterface) => {
    let form: CustomerInterface = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };
    setLoading(dispatch);
    db.collection("customers")
      .doc(data.id)
      .set(form)
      .then(() => {
        console.log("updated successfully");
        enqueueSnackbar("Customer Updated Successfully!", {
          variant: "success",
        });
        unsetLoading(dispatch);
      })
      .catch((error: string) => {
        console.log(error);
        enqueueSnackbar(error, { variant: "error" });
        unsetLoading(dispatch);
      });
  };

  const deleteCustomer = (id: string) => {
    setLoading(dispatch);
    db.collection("customers")
      .doc(id)
      .delete()
      .then(() => {
        console.log("updated successfully");
        enqueueSnackbar("Customer Deleted Successfully!", {
          variant: "success",
        });
        unsetLoading(dispatch);
      })
      .catch((error: string) => {
        console.log(error);
        enqueueSnackbar(error, { variant: "error" });
        unsetLoading(dispatch);
      });
  };

  return {
    addCustomer,
    getCustomerList,
    updateCustomer,
    deleteCustomer,
    customers,
    setCustomers,
  };
};

export default useFirestore;
