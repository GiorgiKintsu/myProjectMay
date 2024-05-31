import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/contact/')({
  component: () => <div>Hello /_layout/contact/!</div>
})