
export interface CurrencyOption {
  value: string;
  symbol: string;
  label: string;
}

export interface ProductFormState {
  focusedIndex: number;
  selectedCurrency: CurrencyOption;
  productName: string;
  selectedProductType: string | null;
  productDescription: string;
  urlPrefix: string;
  urlSlug: string;
  summary: string;
  price: string;
  customDomain: string;
  coverImage: string[];
  thumbnailImage: string;
  selectedAction: string;
  validationErrors: {
    productName?: string;
    price?: string;
  };
  coverImagePrompt: string;
  thumbnailImagePrompt: string;
  published: boolean;
}

export type ProductFormAction =
  | { type: "SET_FIELD"; field: keyof ProductFormState; value: any }
  | {
      type: "SET_ERROR";
      field: keyof ProductFormState["validationErrors"];
      message: string;
    }
  | {
      type: "CLEAR_ERRORS";
    }
  | { type: "SET_COVER_IMAGE"; url: string }
  | { type: "SET_THUMBNAIL_IMAGE"; url: string }
  | { type: 'RESET_FORM';  }
