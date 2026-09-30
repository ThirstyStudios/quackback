import { createFileRoute, redirect } from '@tanstack/react-router'

// XBert: old Canny link (roadmap.xbert.io/xbert was Canny's "features" board) -> the board here.
export const Route = createFileRoute('/xbert')({
  beforeLoad: () => {
    throw redirect({ href: '/?board=features', replace: true })
  },
})
