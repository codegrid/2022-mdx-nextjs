export const RankingTable = ({ month, rankingData }) => {
  const fontColor = { 1: 'gold', 2: 'silver', 3: 'brown' }
  return (
    <table>
      <caption>{month}のお気に入り数ランキング</caption>
      <tbody>
        {rankingData.map((item, index) => {
          return (
            <tr key={item.slug}>
              <th style={{ color: fontColor[index + 1] || 'currentColor' }}>{index + 1}位</th>
              <td>{item.title}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
