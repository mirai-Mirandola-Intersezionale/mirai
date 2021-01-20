import { useRouter } from 'next/router'
export default function CenterPage() {
  const router = useRouter()
  return <Box>Page ID: ${router.query.centerId}</Box>
}