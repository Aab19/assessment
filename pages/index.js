import {useState} from 'react'

import Button from '../components/Button'
import Select from '../components/Form/Select'

const Home = () => {
  const grade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [aspekOne, setAspekOne] = useState()
  const [aspekTwo, setAspekTwo] = useState()
  const [aspekThree, setAspekThree] = useState()
  const [aspekFour, setAspekFour] = useState()
  const [result, setResult] = useState()

  const sortingList = val => {
    if (val !== undefined) {
      let list
      let sorted = Object.keys(val).sort()
      if (sorted.includes('mahasiswa_10')) {
        let filter = sorted.filter(ls => ls !== 'mahasiswa_10')
        filter.push('mahasiswa_10')
        list = filter
      } else {
        list = Object.keys(val).sort()
      }
      return list.reduce((accumulator, key) => {
        accumulator[key] = val[key]

        return accumulator
      }, {})
    }
  }

  return (
    <>
      <main>
        <div className="max-w-[90%] m-auto flex flex-col justify-center items-center">
          <div className="font-bold text-[32px] my-10">
            Aplikasi Penilaian Mahasiswa
          </div>
          <div className="bg-white p-4 rounded-2xl w-full mb-10">
            <div className="grid grid-cols-5 gap-4">
              <div></div>
              <div className="text-center">Aspek Penilaian 1</div>
              <div className="text-center">Aspek Penilaian 2</div>
              <div className="text-center">Aspek Penilaian 3</div>
              <div className="text-center">Aspek Penilaian 4</div>
            </div>

            {grade.map((val, idx) => {
              return (
                <div
                  key={idx}
                  className="grid grid-cols-5 gap-4 items-center mt-4 border border-[#FFDDBF] rounded-lg px-4 py-3">
                  <div>Mahasiswa {idx + 1}</div>
                  <Select
                    name={`mahasiswa_${idx + 1}`}
                    placeholder="Select Grade"
                    options={grade}
                    onChange={e => {
                      setAspekOne(prevState => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                      }))
                    }}
                  />
                  <Select
                    name={`mahasiswa_${idx + 1}`}
                    placeholder="Select Grade"
                    options={grade}
                    onChange={e => {
                      setAspekTwo(prevState => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                      }))
                    }}
                  />
                  <Select
                    name={`mahasiswa_${idx + 1}`}
                    placeholder="Select Grade"
                    options={grade}
                    onChange={e => {
                      setAspekThree(prevState => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                      }))
                    }}
                  />
                  <Select
                    name={`mahasiswa_${idx + 1}`}
                    placeholder="Select Grade"
                    options={grade}
                    onChange={e => {
                      setAspekFour(prevState => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                      }))
                    }}
                  />
                </div>
              )
            })}

            <div className="flex flex-row justify-end">
              <Button
                id="btn-save"
                containerClass="mt-4"
                text="Simpan"
                onClick={() => {
                  setResult()
                  let result = {
                    aspek_penilaian_1: sortingList(aspekOne),
                    aspek_penilaian_2: sortingList(aspekTwo),
                    aspek_penilaian_3: sortingList(aspekThree),
                    aspek_penilaian_4: sortingList(aspekFour),
                  }
                  setResult(result)
                }}
              />
            </div>

            <pre className="mt-8">{JSON.stringify(result, null, 2)}</pre>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
