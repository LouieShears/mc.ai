// This file can be replaced during build by using the `fileReplacements` array.
import { Environment } from './environment.interface';
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//http://infra-publi-1x151npvssg5x-1926414191.eu-west-2.elb.amazonaws.com:5000/ =>live
export const API_BASE = 'http://infra-publi-1x151npvssg5x-1926414191.eu-west-2.elb.amazonaws.com:5000/';
//export const API_BASE = 'http://0.0.0.0:5000/';
export const API_PATH = "api/v1/";

// Google Login OAUTH For Development
export const Google_oAuth = "21768488944-0k0p4o80hamo0ihbfvbp345aohkq9pfm.apps.googleusercontent.com"
// Google Analytics Measurement ID
export const Google_mID = "G-5LN5GC9PRZ"
// Crisp Chat ID
export const crispID = "aa35c9b2-6694-47c7-85f8-6d2de5855131";
// Beamer Product ID
export const Beamer_pID = "JaugWmUd35818";
// DoorBell Key for Development
export const doorbellKey = "https://doorbell.io/api/applications/12529/submit?key=AgEvm1hkkyekGgTDmKs0XCsnmrUDGLqPv5IFOZmWXAWVS4EeO3TvqJlqKkDpXyyu";
// HotJar Config
export const hotJarID = 2672282;
export const hotJarSV = 6;
// Mixpanel
export const MIXPANEL_PROJECT_TOKEN = '0f3fe14bd52ffd3d52f4921f3f2831ce';
export const MIXPANEL_API_SECRET = '303897533b06bddad50f747ce9aa2b72';

export const environment: Environment = {
  production: false,
  inMaintenance: false,
  apiUrls: {
    auth: {
      login: `${API_BASE}${API_PATH}auth/login`,
      logout: `${API_BASE}${API_PATH}logout`,
      user: `${API_BASE}${API_PATH}auth/user`,
      signup: `${API_BASE}${API_PATH}auth/sign-up`,
      googleLogin: `${API_BASE}${API_PATH}auth/google-login`,
      changePassword: `${API_BASE}${API_PATH}auth/change-password`,
      resetPassword: `${API_BASE}${API_PATH}auth/reset-password`,
      forgotPassword: `${API_BASE}${API_PATH}auth/forgot-password`,
    },
    tool: {
      details: `${API_BASE}${API_PATH}tools/`,
      list: `${API_BASE}${API_PATH}tools/`,
      request: `${API_BASE}${API_PATH}tools/request`
    },
    document: {
      create: `${API_BASE}${API_PATH}documents/`,
      list: `${API_BASE}${API_PATH}documents/`,
      update: `${API_BASE}${API_PATH}documents/`,
      delete: `${API_BASE}${API_PATH}documents/`,
      trash: `${API_BASE}${API_PATH}documents/trash`
    },
    content: {
      list: `${API_BASE}${API_PATH}content/`,
      create: `${API_BASE}${API_PATH}content/`,
      update: `${API_BASE}${API_PATH}content/`,
      writeForMe: `${API_BASE}${API_PATH}content/`,
      delete: `${API_BASE}${API_PATH}content/`,
      trash: `${API_BASE}${API_PATH}content/trash`,
      search: `${API_BASE}${API_PATH}search/`
    },
    project: {
      list: `${API_BASE}${API_PATH}project/`,
      details: `${API_BASE}${API_PATH}project/`,
      create: `${API_BASE}${API_PATH}project/`,
      update: `${API_BASE}${API_PATH}project/`,
      delete: `${API_BASE}${API_PATH}project/`
    },
    user: {
      list: `${API_BASE}${API_PATH}user/`,
      details: `${API_BASE}${API_PATH}user/`,
      create: `${API_BASE}${API_PATH}user/`,
      update: `${API_BASE}${API_PATH}user/`,
      delete: `${API_BASE}${API_PATH}user/`,
      usage: `${API_BASE}${API_PATH}user/`,
      referral: `${API_BASE}${API_PATH}user/`
    },
    subscription: {
      plans: `${API_BASE}${API_PATH}subscriptions/plans`,
      cancel: `${API_BASE}${API_PATH}subscriptions/cancel-subscription`
    },
    payments: {
      config: `${API_BASE}${API_PATH}payments/config`,
      checkoutSession: `${API_BASE}${API_PATH}payments/create-checkout-session`
    },
    feedback: `${API_BASE}${API_PATH}feedback/`
  }
};
