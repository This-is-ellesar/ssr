/*
  В этом файле описываем основную логику с конфиг файлом
 */
import { buildConfig } from "../../../build.config";
// types
import {BuildConfig} from "../../../index";

export const getConfigProperty = (): BuildConfig => {
  return buildConfig
}