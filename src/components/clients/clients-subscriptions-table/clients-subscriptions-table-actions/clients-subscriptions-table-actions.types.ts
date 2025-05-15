export interface ClientsSubscriptionsTableActionsEvents {
  onBarcode: (subscriptionId: string) => void
  onPause: (subscriptionId: string) => void
  onResume: (subscriptionId: string) => void
  onRefund: (subscriptionId: string) => void
}
