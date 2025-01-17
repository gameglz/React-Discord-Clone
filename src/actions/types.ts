export enum ACTION {
  RECEIVE_SOCKET_MESSAGE,
  RECEIVE_SOCKET_PRIVATE_MESSAGE,
  SEND_SOCKET_MESSAGE,
  SEND_SOCKET_PRIVATE_MESSAGE,
  ADD_SERVER,
  ADD_PRIVATE_MESSAGE,
  ADD_CHANNEL,
  CHANGE_CHANNEL,
  CHANGE_SERVER,
  CHANGE_VIEW,
  CHANGE_PM_USER,
  UPDATE_ACTIVE_USERS,
  UPDATE_ACTIVE_STATE,
  SIGN_IN,
  SIGN_OUT,
  GET_INITIAL_DATA
}

export type ChatActionTypes =
  | ReceiveMessageAction
  | ReceivePrivateMessageAction
  | AddChannelAction
  | AddServerAction
  | ChangeServerAction
  | ChangeChannelAction
  | ChangeViewAction
  | ChangePmUserAction
  | LoadUserDataAction
  | UpdateActiveUsersAction;

export type SocketActions =
  | SendMessageAction
  | SendPrivateMessageAction
  | SignInAction
  | LoadUserDataAction
  | AddServerAction
  | UpdateActiveStateAction;

export type UserActionTypes = SignInAction | SignOutAction;

/* Actions Types */
export type SendMessageAction = {
  type: ACTION.SEND_SOCKET_MESSAGE;
  payload: SendMessageData;
};

export type ReceiveMessageAction = {
  type: ACTION.RECEIVE_SOCKET_MESSAGE;
  payload: ReceiveMessageData;
};

export type SendPrivateMessageAction = {
  type: ACTION.SEND_SOCKET_PRIVATE_MESSAGE;
  payload: SendPrivateMessageData;
};

export type ReceivePrivateMessageAction = {
  type: ACTION.RECEIVE_SOCKET_PRIVATE_MESSAGE;
  payload: ReceivePrivateMessageData;
};

export type AddChannelAction = {
  type: ACTION.ADD_CHANNEL;
  payload: AddChannelData;
};

export type AddServerAction = {
  type: ACTION.ADD_SERVER;
  payload: AddServerData;
};

export type UpdateActiveUsersAction = {
  type: ACTION.UPDATE_ACTIVE_USERS;
  payload: { user_name: string }[];
};

export type UpdateActiveStateAction = {
  type: ACTION.UPDATE_ACTIVE_STATE;
  payload: null;
};

export type ChangeServerAction = {
  type: ACTION.CHANGE_SERVER;
  payload: string;
};

export type ChangeChannelAction = {
  type: ACTION.CHANGE_CHANNEL;
  payload: string;
};

export type ChangeViewAction = {
  type: ACTION.CHANGE_VIEW;
  payload: string;
};

export type ChangePmUserAction = {
  type: ACTION.CHANGE_PM_USER;
  payload: string;
};

export type LoadUserDataAction = {
  type: ACTION.GET_INITIAL_DATA;
  payload: LoadInitialData;
};

export type SignInAction = {
  type: ACTION.SIGN_IN;
  payload: SignInData;
};

export type SignOutAction = {
  type: ACTION.SIGN_OUT;
  payload: null;
};

/* Interfaces for Data coming into Action Creators */

export interface SendMessageData {
  type: 'channelMessage';
  server: string;
  channel: string;
  from: string;
  msg: string;
}

export interface SendPrivateMessageData {
  type: 'privateMessage';
  from: string;
  to: string;
  msg: string;
}

export interface ReceiveMessageData {
  server: string;
  channel: string;
  from: string;
  msg: string;
  date: Date;
}

export interface ReceivePrivateMessageData {
  user: string;
  from: string;
  to: string;
  msg: string;
  date: Date;
}

export interface AddChannelData {
  server: string;
  channel: string;
}

export interface AddServerData {
  server: string;
  channel: string;
}

export interface LoadInitialData {
  servers: {
    [serverName: string]: {
      channels: {
        [channelName: string]: { from: string; to: string; msg: string; date: Date }[];
      };
    };
  };
  privateMessages: {
    [userPM: string]: { from: string; to: string; msg: string; user: string; date: Date }[];
  };
}

export interface SignInData {
  userId: string;
  userName: string;
}
