export default function (ctx, test = undefined) {
  test = 123
  console.log('some middleware output:', test)
}
