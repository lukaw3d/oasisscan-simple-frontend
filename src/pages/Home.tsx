import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <a href="https://lukaw3d.github.io/oasisscan-simple-frontend/testnet/">testnet</a><br/>
      <a href="https://lukaw3d.github.io/oasisscan-simple-frontend/mainnet/">mainnet</a><br/>

      <h2>Consensus</h2>
      <Link to="/consensus/blocks?size=100&page=1">Blocks</Link><br />
      <Link to="/consensus/transactions?size=100&page=1">Transactions</Link><br />
      <Link to="/consensus/events?address=oasis1qqekv2ymgzmd8j2s2u7g0hhc7e77e654kvwqtjwm&size=100&page=1">Events</Link><br />
      <Link to="/consensus/accounts/oasis1qqekv2ymgzmd8j2s2u7g0hhc7e77e654kvwqtjwm">Account</Link><br />
      <Link to="/consensus/accounts-delegations/oasis1qqekv2ymgzmd8j2s2u7g0hhc7e77e654kvwqtjwm">Account delegations</Link><br />
      <Link to="/consensus/accounts-debonding-delegations/oasis1qqekv2ymgzmd8j2s2u7g0hhc7e77e654kvwqtjwm">Account debonding delegations</Link><br />
      <Link to="/consensus/validators?size=100&page=1">Validators</Link><br />
      <Link to="/consensus/proposals?size=100&page=1">Proposals</Link><br />

      <h2>Emerald</h2>
      <Link to="/emerald/blocks?size=100&page=1">Blocks</Link><br />
      <Link to="/emerald/transactions?size=100&page=1">Transactions</Link><br />

      <h2>Sapphire</h2>
      <Link to="/sapphire/blocks?size=100&page=1">Blocks</Link><br />
      <Link to="/sapphire/transactions?size=100&page=1">Transactions</Link><br />

      <h2>Cipher</h2>
      <Link to="/cipher/blocks?size=100&page=1">Blocks</Link><br />
      <Link to="/cipher/transactions?size=100&page=1">Transactions</Link><br />
      <Link to="/cipher/transactions/">Transaction</Link><br />

      <br />
      <h2>Misc</h2>
      <Link to="https://github.com/lukaw3d/oasisscan-simple-frontend">Source code</Link><br />
    </>
  )
}
