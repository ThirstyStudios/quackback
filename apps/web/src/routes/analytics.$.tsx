import { createFileRoute, redirect } from '@tanstack/react-router'

// XBert: old Canny link (roadmap.xbert.io/analytics/..., e.g. old post links, was Canny's "analytics" board) -> the board here.
export const Route = createFileRoute('/analytics/$')({
  beforeLoad: () => {
    throw redirect({ href: '/?board=analytics', replace: true })
  },
})
