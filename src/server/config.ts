import type { AppConfig } from '@/store/types';
import { deffHttp } from '@/utils/axios';

enum Api {
  ROUTE_CONFIG_INFO = '/mini-xs-admin/serverConfig.json',
}

export const getConfigInfo = () => deffHttp.get<AppConfig>({ url: Api.ROUTE_CONFIG_INFO });
