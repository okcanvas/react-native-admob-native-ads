---
id: mediationoptions-5
title: mediationOptions
sidebar_label: mediationOptions
---

The `mediationOptions` prop can be used if you are mediating from ad networks other than Admob. Currently we support Facebook Ads Mediation by default.

### `nativeBanner`

To load facebook native banner ads with waterfall mediation, you are required to set this to true. Otherwise the impressions/clicks will not be recorded.

| Type      | Required | Platform |
| --------- | -------- | -------- |
| `boolean` | No       | All      |

`default:false`

:::tip

For Facebook bidding integrations, the adapter automatically loads the ad format you defined when setting up Facebook Audience Network.

:::
