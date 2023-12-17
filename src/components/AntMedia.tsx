import { WebRTCAdaptor } from "@antmedia/webrtc_adaptor";

export const webRTCAdaptor: any = new WebRTCAdaptor({
  websocket_url: "ws://66.135.24.9:5080/WebRTCAppEE/websocket",
  mediaConstraints: {
    audio: true,
  },

  peerconnection_config: {
    iceServers: [{ urls: "stun:stun1.l.google.com:19302" }],
  },
  sdp_constraints: {
    OfferToReceiveAudio: false,
    OfferToReceiveVideo: false,
  },
  localVideoId: "id-of-video-element",
});
