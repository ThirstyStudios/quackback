import { describe, it, expect } from 'vitest'
import { getCustomerOidcProviderIds } from '../customer-oidc'

describe('getCustomerOidcProviderIds', () => {
  it('is empty when unset or blank', () => {
    expect(getCustomerOidcProviderIds(undefined).size).toBe(0)
    expect(getCustomerOidcProviderIds('').size).toBe(0)
    expect(getCustomerOidcProviderIds(' , ').size).toBe(0)
  })

  it('parses a comma-separated list and trims ids', () => {
    expect([...getCustomerOidcProviderIds(' oidc_a ,oidc_b,, ')]).toEqual(['oidc_a', 'oidc_b'])
  })
})
