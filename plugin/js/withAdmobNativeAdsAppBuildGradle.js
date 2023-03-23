import { withDangerousMod, withPlugins } from '@expo/config-plugins';
import { resolve } from 'path';
import { writeFileSync, readFileSync } from 'fs';

const withAdmobNativeAdsAppBuildGradle = (config) => {
    return withDangerousMod(config, [
    'android',
    (cfg) => {
        const { platformProjectRoot } = cfg.modRequest;
        const build = resolve(platformProjectRoot, 'app/build.gradle');
        const contents = readFileSync(build, 'utf-8');
        const lines = contents.split('\n');
        const index = lines.findIndex((line) =>
        /dependencies\s{/.test(line)
        );

        writeFileSync(
        build,
        [
            ...lines.slice(0, index + 1),
            `    implementation "com.google.android.gms:play-services-ads:21.3.0"`,
            ...lines.slice(index + 1),
        ].join('\n')
        );

        return cfg;
    }
    ]);
};

export const withAdmobNativeAdsGradle = (config) => {
    return withPlugins(config, [
        withAdmobNativeAdsAppBuildGradle,
    ]);
};