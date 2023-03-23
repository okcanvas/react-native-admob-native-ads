import { withDangerousMod, withPlugins } from '@expo/config-plugins';
import { resolve } from 'path';
import { writeFileSync, readFileSync } from 'fs';

const withAdmobNativeAdsPod = (config) => {
    return withDangerousMod(config, [
    'ios',
    (cfg) => {
        const { platformProjectRoot } = cfg.modRequest;
        const podfile = resolve(platformProjectRoot, 'Podfile');
        const contents = readFileSync(podfile, 'utf-8');
        const lines = contents.split('\n');
        const index = lines.findIndex((line) =>
        /\s+use_expo_modules!/.test(line)
        );

        writeFileSync(
        podfile,
        [
            ...lines.slice(0, index),
            `  pod 'Google-Mobile-Ads-SDK'`,
            `  pod 'GoogleMobileAdsMediationFacebook', '6.11.0.0'`,
            ...lines.slice(index),
        ].join('\n')
        );

        return cfg;
    }
    ]);
};

export const withAdmobNativeAdsPodNat = (config) => {
    return withPlugins(config, [
        withAdmobNativeAdsPod,
    ]);
};
