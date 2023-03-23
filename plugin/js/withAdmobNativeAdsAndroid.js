import {
  AndroidConfig,
  ConfigPlugin,
  withAndroidManifest,
} from '@expo/config-plugins';

const { addMetaDataItemToMainApplication, getMainApplicationOrThrow } = AndroidConfig.Manifest;

const withAdmobNativeAdsManifest = (config, props) => {
  return withAndroidManifest(config, (config) => {
    config.modResults = setAdmobNativeAdsConfig(config.modResults, props);
    return config;
  });
};

const setAdmobNativeAdsConfig = (androidManifest, props) => {
  let mainApplication = getMainApplicationOrThrow(androidManifest);
  addMetaDataItemToMainApplication(
      mainApplication,
      'com.google.android.gms.ads.APPLICATION_ID',
      props.androidAppId
  );

  return androidManifest;
};

export const withAdmobNativeAdsAndroid = (config, props) => {
  return withAdmobNativeAdsManifest(config, props);
};