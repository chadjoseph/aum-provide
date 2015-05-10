import Defer from 'aum-defer';
import clear from 'aum-clear';
import config from 'aum-config';
import paint from 'aum-paint';
import request from 'aum-request';
import route from 'aum-route';
import xhr from 'aum-xhr';

var provide = {
  Defer: Defer,
  clear: clear,
  config: config,
  paint: paint,
  request: request,
  route: route,
  xhr: xhr
};

export default function (callback) {
  if (callback) {
    callback(provide);
  }

  return provide;
}

