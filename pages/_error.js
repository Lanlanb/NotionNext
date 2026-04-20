export default function ErrorPage({ statusCode }) {
  return <div>Terjadi kesalahan, kode status：{statusCode || 404}</div>
}
ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
