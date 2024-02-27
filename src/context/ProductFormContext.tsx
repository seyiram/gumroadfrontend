import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { ProductFormState, ProductFormAction } from "./ProductFormTypes";
import { typeOptions } from "../components/pages/Products/TypeOption";
import { useAuth } from "./AuthContext";

const initialState: ProductFormState = {
  focusedIndex: 0,
  productName: "",
  selectedProductType: typeOptions[0].title,
  selectedCurrency: { value: "usd", symbol: "$", label: "US Dollars" },
  price: "",
  productDescription: "",
  validationErrors: {},
  customDomain: "",
  coverImage: [],
  thumbnailImage: "",
  selectedAction: "want",
  urlPrefix: "",
  urlSlug: "",
  summary: "",
  coverImagePrompt: "",
  thumbnailImagePrompt: "",
  published: false,
};

const productFormReducer = (
  state: ProductFormState,
  action: ProductFormAction
): ProductFormState => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };

    case "SET_ERROR":
      return {
        ...state,
        validationErrors: {
          ...state.validationErrors,
          [action.field]: action.message,
        },
      };
    case "CLEAR_ERRORS":
      return { ...state, validationErrors: {} };
    case "SET_COVER_IMAGE":
      return { ...state, coverImage: [action.url] };
    case "SET_THUMBNAIL_IMAGE":
      return { ...state, thumbnailImage: action.url };
    case "RESET_FORM":
      return {
        ...initialState,
      };
    default:
      const exhaustiveCheck: never = action;
      throw new Error(
        `Unhandled action type: ${(exhaustiveCheck as any).type}`
      );
  }
};

type ErrorField = keyof Pick<ProductFormState, "productName" | "price">;

const ProductFormContext = createContext<{
  state: ProductFormState;
  dispatch: React.Dispatch<ProductFormAction>;
  handleChange: (
    field: keyof ProductFormState
  ) => (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSetError: (field: ErrorField, message: string) => void;
}>({
  state: initialState,
  dispatch: () => undefined,
  handleChange: () => () => {},
  handleSetError: () => () => {},
});

export const useProductForm = () => useContext(ProductFormContext);

export const ProductFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(productFormReducer, initialState);
  const { currentUser, loading } = useAuth();

  useEffect(() => {
    if (!loading && currentUser?.email) {
      const generateUrlPrefixFromEmail = (email: string) => {
        const emailPrefix = email.split("@")[0];
        const sanitizedPrefix = emailPrefix.replace(/[^a-zA-Z0-9_.-]/g, "");
        return `${sanitizedPrefix}.gumroad.com/l/`;
      };

      const urlPrefix = generateUrlPrefixFromEmail(currentUser.email);
      dispatch({ type: "SET_FIELD", field: "urlPrefix", value: urlPrefix });
    }
  }, [currentUser, dispatch, loading]);

  const handleChange = useCallback(
    (field: keyof ProductFormState) =>
      (
        event:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
          | React.ChangeEvent<HTMLSelectElement>
      ) => {
        const newValue = event.target.value;
        console.log(`Dispatching field: ${field}, value: ${newValue}`);
        dispatch({ type: "SET_FIELD", field, value: newValue });
      },
    [dispatch]
  );

  const handleSetError = useCallback(
    (field: ErrorField, message: string) => {
      dispatch({ type: "SET_ERROR", field, message });
    },
    [dispatch]
  );

  return (
    <ProductFormContext.Provider
      value={{ state, dispatch, handleChange, handleSetError }}
    >
      {children}
    </ProductFormContext.Provider>
  );
};
