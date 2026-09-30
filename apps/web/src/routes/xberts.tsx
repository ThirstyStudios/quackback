import { createFileRoute, redirect } from '@tanstack/react-router'

// XBert: old Canny link (roadmap.xbert.io/xberts was Canny's "alerts" board) -> the board here.
export const Route = createFileRoute('/xberts')({
  beforeLoad: () => {
    throw redirect({ href: '/?board=alerts', replace: true })
  },
})
