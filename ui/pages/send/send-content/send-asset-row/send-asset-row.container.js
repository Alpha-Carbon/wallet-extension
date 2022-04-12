import { connect } from 'react-redux';
import {
  getCollectibles,
  getNativeCurrency,
} from '../../../../ducks/metamask/metamask';
import {
  getMetaMaskAccounts,
  getNativeCurrencyImage,
  getMetaMaskAccountsOrdered,
} from '../../../../selectors';
import { updateSendAsset, getSendAsset } from '../../../../ducks/send';
import SendAssetRow from './send-asset-row.component';
import { showAccountDetail } from '../../../../store/actions';

function mapStateToProps(state) {
  return {
    tokens: state.metamask.tokens,
    selectedAddress: state.metamask.selectedAddress,
    collectibles: getCollectibles(state),
    sendAsset: getSendAsset(state),
    accounts: getMetaMaskAccounts(state),
    nativeCurrency: getNativeCurrency(state),
    nativeCurrencyImage: getNativeCurrencyImage(state),
    accountsList: getMetaMaskAccountsOrdered(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSendAsset: ({ type, details }) =>
      dispatch(updateSendAsset({ type, details })),
    showAccountDetail: (address) => {
      dispatch(showAccountDetail(address));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SendAssetRow);
