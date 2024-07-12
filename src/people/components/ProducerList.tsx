const getUniqueCounts = ({
  producers
}: {
  producers: string[]
}): Record<string, number> | null => {
  const frequencies: Record<string, number> = {}

  producers.forEach((element) => {
    if (frequencies[element]) {
      frequencies[element]++
    } else {
      frequencies[element] = 1
    }
  })

  return frequencies
}

const ProducerList: React.FC<{ producers: string[] }> = ({ producers }) => {
  const objectProducerAppereances = getUniqueCounts({ producers })
  return (
    <ul>
      {objectProducerAppereances &&
        Object.entries(objectProducerAppereances).map(([producer, count]) => (
          <li key={producer}>
            {producer}: {count}
          </li>
        ))}
    </ul>
  )
}

export default ProducerList
