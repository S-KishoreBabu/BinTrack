import React from 'react'
import BinCard from "../../features/bins/components/BinCard";

const CardWrapper = () => {

const data = [
  { id: 1, location: "DB Road", percentage: 85 },
  { id: 2, location: "DB Road", percentage: 40 },

  { id: 3, location: "TV Swamy Road", percentage: 65 },
  { id: 4, location: "TV Swamy Road", percentage: 20 },

  { id: 5, location: "Cowley Brown Road", percentage: 90 },
  { id: 6, location: "Cowley Brown Road", percentage: 55 },

  { id: 7, location: "Ponnurangam Road East", percentage: 30 },
  { id: 8, location: "Ponnurangam Road East", percentage: 75 },

  { id: 9, location: "Ponnurangam Road West", percentage: 50 },
  { id: 10, location: "Ponnurangam Road West", percentage: 95 },

  { id: 11, location: "Venkatasamy Road East", percentage: 60 },
  { id: 12, location: "Venkatasamy Road East", percentage: 25 },

  { id: 13, location: "Venkatasamy Road West", percentage: 70 },
  { id: 14, location: "Venkatasamy Road West", percentage: 45 },

  { id: 15, location: "Periasamy Road East", percentage: 35 },
  { id: 16, location: "Periasamy Road East", percentage: 80 },

  { id: 17, location: "Periasamy Road West", percentage: 55 },
  { id: 18, location: "Periasamy Road West", percentage: 20 },

  { id: 19, location: "Bashyakarlu Road East", percentage: 88 },
  { id: 20, location: "Bashyakarlu Road East", percentage: 42 },

  { id: 21, location: "Bashyakarlu Road West", percentage: 67 },
  { id: 22, location: "Bashyakarlu Road West", percentage: 15 },

  { id: 23, location: "Sambandam Road", percentage: 73 },
  { id: 24, location: "Sambandam Road", percentage: 28 },

  { id: 25, location: "Lokamanya Street", percentage: 91 },
  { id: 26, location: "Lokamanya Street", percentage: 36 },

  { id: 27, location: "Ramalingam Road", percentage: 62 },
  { id: 28, location: "Ramalingam Road", percentage: 18 },

  { id: 29, location: "Arokiyasamy Road", percentage: 77 },
  { id: 30, location: "Arokiyasamy Road", percentage: 33 },

  { id: 31, location: "Srinivasa Ragavan Street", percentage: 58 },
  { id: 32, location: "Srinivasa Ragavan Street", percentage: 22 },

  { id: 33, location: "Venkataramana Road", percentage: 84 },
  { id: 34, location: "Venkataramana Road", percentage: 48 }
];
  return (
<div className="p-4 sm:p-6 md:p-8 w-full">
  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
    {data.map((item) => (
      <BinCard
        key={item.id}
        id={item.id}
        location={item.location}
        percentage={item.percentage}
      />
    ))}
  </div>
</div>

  )
}

export default CardWrapper