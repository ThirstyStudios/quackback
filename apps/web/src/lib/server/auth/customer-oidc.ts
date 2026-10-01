/**
 * XBert build: customer OIDC providers.
 *
 * `XBERT_CUSTOMER_OIDC_PROVIDERS` lists the registrationIds (comma-separated)
 * of identity providers whose sign-ins are customer logins — XBert's Auth0.
 * For those providers:
 *
 *   - Implicit account linking is NOT trusted. Better Auth then joins a sign-in
 *     to an existing account only when the IdP asserts `email_verified`, so a
 *     login whose address was never proven can't take over someone's account.
 *   - A sign-in through one grants access to a private portal (see
 *     `hasCustomerSsoAccount` in evaluatePortalAccess).
 *
 * Unset or empty means no customer providers: stock behaviour.
 */
export function getCustomerOidcProviderIds(
  raw: string | undefined = process.env.XBERT_CUSTOMER_OIDC_PROVIDERS
): Set<string> {
  return new Set(
    (raw ?? '')
      .split(',')
      .map((id) => id.trim())
      .filter(Boolean)
  )
}
