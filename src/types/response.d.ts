interface LinksContains {
  href: string;
  templated?: boolean;
}
interface LinksResponse {
  account: LinksContains;
  effects: LinksContains;
  ledger: LinksContains;
  operations: LinksContains;
  precedes: LinksContains;
  self: LinksContains;
  succeeds: LinksContains;
  transaction: LinksContains;
}
interface Mintime {
  min_time: string;
}
interface Timebounds {
  timebounds: Mintime;
}
export interface FriendbotResponse {
  created_at: string;
  envelope_xdr: string;
  fee_account: string;
  fee_charged: string;
  fee_meta_xdr: string;
  hash: string;
  id: string;
  ledger: number;
  max_fee: string;
  memo_type: string;
  operation_count: number;
  paging_token: string;
  preconditions: Timebounds;
  result_meta_xdr: string;
  result_xdr: string;
  signatures: string[];
  source_account: string;
  source_account_sequence: string;
  successful: boolean;
  valid_after: string;
  _links: LinksResponse;
}
