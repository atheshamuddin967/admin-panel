import { WebRTCAdaptor } from "@antmedia/webrtc_adaptor";

export const webRTCAdaptor: any = new WebRTCAdaptor({
  websocket_url: "ws://bappmedia.creativeaid.it:5080/WebRTCAppEE/websocket",
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
  remoteVideoElement: document.getElementById("remoteVideo"),
});
