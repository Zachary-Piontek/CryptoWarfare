/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Coins } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CoinsUpdateForm(props) {
  const {
    id: idProp,
    coins,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    symbol: "",
    price: "",
    market_cap: "",
    percent_change_24h: "",
    favorite: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [symbol, setSymbol] = React.useState(initialValues.symbol);
  const [price, setPrice] = React.useState(initialValues.price);
  const [market_cap, setMarket_cap] = React.useState(initialValues.market_cap);
  const [percent_change_24h, setPercent_change_24h] = React.useState(
    initialValues.percent_change_24h
  );
  const [favorite, setFavorite] = React.useState(initialValues.favorite);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = coinsRecord
      ? { ...initialValues, ...coinsRecord }
      : initialValues;
    setName(cleanValues.name);
    setSymbol(cleanValues.symbol);
    setPrice(cleanValues.price);
    setMarket_cap(cleanValues.market_cap);
    setPercent_change_24h(cleanValues.percent_change_24h);
    setFavorite(cleanValues.favorite);
    setErrors({});
  };
  const [coinsRecord, setCoinsRecord] = React.useState(coins);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Coins, idProp) : coins;
      setCoinsRecord(record);
    };
    queryData();
  }, [idProp, coins]);
  React.useEffect(resetStateValues, [coinsRecord]);
  const validations = {
    name: [],
    symbol: [],
    price: [],
    market_cap: [],
    percent_change_24h: [],
    favorite: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          symbol,
          price,
          market_cap,
          percent_change_24h,
          favorite,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Coins.copyOf(coinsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CoinsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              symbol,
              price,
              market_cap,
              percent_change_24h,
              favorite,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Symbol"
        isRequired={false}
        isReadOnly={false}
        value={symbol}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              symbol: value,
              price,
              market_cap,
              percent_change_24h,
              favorite,
            };
            const result = onChange(modelFields);
            value = result?.symbol ?? value;
          }
          if (errors.symbol?.hasError) {
            runValidationTasks("symbol", value);
          }
          setSymbol(value);
        }}
        onBlur={() => runValidationTasks("symbol", symbol)}
        errorMessage={errors.symbol?.errorMessage}
        hasError={errors.symbol?.hasError}
        {...getOverrideProps(overrides, "symbol")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              symbol,
              price: value,
              market_cap,
              percent_change_24h,
              favorite,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Market cap"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={market_cap}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              symbol,
              price,
              market_cap: value,
              percent_change_24h,
              favorite,
            };
            const result = onChange(modelFields);
            value = result?.market_cap ?? value;
          }
          if (errors.market_cap?.hasError) {
            runValidationTasks("market_cap", value);
          }
          setMarket_cap(value);
        }}
        onBlur={() => runValidationTasks("market_cap", market_cap)}
        errorMessage={errors.market_cap?.errorMessage}
        hasError={errors.market_cap?.hasError}
        {...getOverrideProps(overrides, "market_cap")}
      ></TextField>
      <TextField
        label="Percent change 24h"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={percent_change_24h}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              symbol,
              price,
              market_cap,
              percent_change_24h: value,
              favorite,
            };
            const result = onChange(modelFields);
            value = result?.percent_change_24h ?? value;
          }
          if (errors.percent_change_24h?.hasError) {
            runValidationTasks("percent_change_24h", value);
          }
          setPercent_change_24h(value);
        }}
        onBlur={() =>
          runValidationTasks("percent_change_24h", percent_change_24h)
        }
        errorMessage={errors.percent_change_24h?.errorMessage}
        hasError={errors.percent_change_24h?.hasError}
        {...getOverrideProps(overrides, "percent_change_24h")}
      ></TextField>
      <SwitchField
        label="Favorite"
        defaultChecked={false}
        isDisabled={false}
        isChecked={favorite}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              symbol,
              price,
              market_cap,
              percent_change_24h,
              favorite: value,
            };
            const result = onChange(modelFields);
            value = result?.favorite ?? value;
          }
          if (errors.favorite?.hasError) {
            runValidationTasks("favorite", value);
          }
          setFavorite(value);
        }}
        onBlur={() => runValidationTasks("favorite", favorite)}
        errorMessage={errors.favorite?.errorMessage}
        hasError={errors.favorite?.hasError}
        {...getOverrideProps(overrides, "favorite")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || coins)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || coins) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
