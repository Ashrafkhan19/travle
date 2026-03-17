declare module 'react-native-config' {
  export interface NativeConfig {
    API_BASE_URL: string;
    ENV_NAME: string;
  }
  
  export const Config: NativeConfig;
  export default Config;
}
