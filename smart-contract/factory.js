import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xba59695E74881e3AA3E4c4ac51D03fDB86481F32"
);

export default instance;
