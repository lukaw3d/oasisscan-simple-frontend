import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <a href="https://lukaw3d.github.io/oasisscan-simple-frontend/testnet/">testnet</a><br/>
      <a href="https://lukaw3d.github.io/oasisscan-simple-frontend/mainnet/">mainnet</a><br/>

      <h2>Consensus</h2>
      <Link to="/consensus/blocks?limit=100&offset=0">Blocks</Link>, <Link to="/consensus/blocks?limit=5000&to=10000000">Blocks&lt;10000000</Link><br />
      <Link to="/consensus/transactions?limit=100&offset=0">Transactions</Link><br />
      <Link to="/consensus/events?limit=100&offset=0">Events</Link><br />
      <Link to="/consensus/accounts/oasis1qzp86dykm9nfqr83es07c324u64f6dgsdvk0fapj">Accounts</Link><br />
      <Link to="/consensus/accounts-delegations/oasis1qzp86dykm9nfqr83es07c324u64f6dgsdvk0fapj">Account delegations</Link><br />
      <Link to="/consensus/accounts-debonding-delegations/oasis1qzp86dykm9nfqr83es07c324u64f6dgsdvk0fapj">Account debonding delegations</Link><br />
      <Link to="/consensus/validators?limit=100&offset=0">Validators</Link><br />
      <Link to="/consensus/proposals?limit=100&offset=0">Proposals</Link><br />

      <h2>Emerald</h2>
      <Link to="/emerald/blocks?limit=100&offset=0">Blocks</Link>, <Link to="/emerald/blocks?limit=5000&to=5000">Blocks&lt;5000</Link><br />
      <Link to="/emerald/transactions?limit=100&offset=0">Transactions</Link><br />
      <Link to="/emerald/accounts/oasis1qrvha284gfztn7wwq6z50c86ceu28jp7csqhpx9t">Accounts</Link><br />

      <h2>Sapphire</h2>
      <Link to="/sapphire/blocks?limit=100&offset=0">Blocks</Link>, <Link to="/sapphire/blocks?limit=5000&to=5000">Blocks&lt;5000</Link><br />
      <Link to="/sapphire/transactions?limit=100&offset=0">Transactions</Link><br />
      <Link to="/sapphire/accounts/oasis1qpupfu7e2n6pkezeaw0yhj8mcem8anj64ytrayne">Accounts</Link><br />

      <h2>Cipher</h2>

      <br />
      <h2>Misc</h2>
      <Link to="https://github.com/lukaw3d/oasisscan-simple-frontend">Source code</Link><br />
    </>
  )
}
