/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Coins } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CoinsUpdateFormInputValues = {
    name?: string;
    symbol?: string;
    price?: number;
    market_cap?: number;
    percent_change_24h?: number;
    favorite?: boolean;
};
export declare type CoinsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    symbol?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    market_cap?: ValidationFunction<number>;
    percent_change_24h?: ValidationFunction<number>;
    favorite?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CoinsUpdateFormOverridesProps = {
    CoinsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    symbol?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    market_cap?: PrimitiveOverrideProps<TextFieldProps>;
    percent_change_24h?: PrimitiveOverrideProps<TextFieldProps>;
    favorite?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CoinsUpdateFormProps = React.PropsWithChildren<{
    overrides?: CoinsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    coins?: Coins;
    onSubmit?: (fields: CoinsUpdateFormInputValues) => CoinsUpdateFormInputValues;
    onSuccess?: (fields: CoinsUpdateFormInputValues) => void;
    onError?: (fields: CoinsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CoinsUpdateFormInputValues) => CoinsUpdateFormInputValues;
    onValidate?: CoinsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CoinsUpdateForm(props: CoinsUpdateFormProps): React.ReactElement;
