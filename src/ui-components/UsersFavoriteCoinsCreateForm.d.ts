/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersFavoriteCoinsCreateFormInputValues = {
    user_id?: string;
    coins_id?: string;
};
export declare type UsersFavoriteCoinsCreateFormValidationValues = {
    user_id?: ValidationFunction<string>;
    coins_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersFavoriteCoinsCreateFormOverridesProps = {
    UsersFavoriteCoinsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user_id?: PrimitiveOverrideProps<TextFieldProps>;
    coins_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersFavoriteCoinsCreateFormProps = React.PropsWithChildren<{
    overrides?: UsersFavoriteCoinsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsersFavoriteCoinsCreateFormInputValues) => UsersFavoriteCoinsCreateFormInputValues;
    onSuccess?: (fields: UsersFavoriteCoinsCreateFormInputValues) => void;
    onError?: (fields: UsersFavoriteCoinsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersFavoriteCoinsCreateFormInputValues) => UsersFavoriteCoinsCreateFormInputValues;
    onValidate?: UsersFavoriteCoinsCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsersFavoriteCoinsCreateForm(props: UsersFavoriteCoinsCreateFormProps): React.ReactElement;
