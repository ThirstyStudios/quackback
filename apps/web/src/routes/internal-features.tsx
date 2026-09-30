import { createFileRoute, redirect } from '@tanstack/react-router'

// XBert: old Canny link (roadmap.xbert.io/internal-features was Canny's "internal-features" board) -> the board here.
export const Route = createFileRoute('/internal-features')({
  beforeLoad: () => {
    throw redirect({ href: '/?board=internal-features', replace: true })
  },
})
