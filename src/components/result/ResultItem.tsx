import { useEffect, useState } from 'react';

interface Distinction {
  element: string;
  distinction0: string;
  distinction1: string;
  distinction2: string;
  distinction3: string;
  distinction4: string;
  distinction5: string;
  distinction6: string;
}

interface DistinctionValue {
  distinction0: number;
  distinction1: number;
  distinction2: number;
  distinction3: number;
  distinction4: number;
  distinction5: number;
  distinction6: number;
}

interface ResultItemProps {
  element: string;
  label: string;
  value: number;
  color: string;
  distinction: Distinction[];
}

interface Separation {
  separation1: number;
  separation2: number;
  separation3: number;
  separation4: number;
  separation5: number;
  separation6: number;
}

function ResultItem({
  element,
  label,
  value,
  color,
  distinction,
}: ResultItemProps) {
  const [separation, setSeparation] = useState<Separation>();
  const [separationFilledPercent, setSeparationFilledPercent] = useState<
    number | null
  >(null);
  const [separationPercent, setSeparationPercent] = useState<number | null>(
    null
  );
  const [distinctionValue, setDistinctionValue] = useState<DistinctionValue>();

  const formatToTwoDecimalPlaces = (num: number): number => {
    return parseFloat(num.toFixed(2));
  };

  const formatToFiveDecimalPlaces = (num: number): number => {
    return parseFloat(num.toFixed(5));
  };

  useEffect(() => {
    if (distinction) {
      setDistinctionValue({
        distinction0: parseFloat(distinction[0].distinction0),
        distinction1: parseFloat(distinction[0].distinction1),
        distinction2: parseFloat(distinction[0].distinction2),
        distinction3: parseFloat(distinction[0].distinction3),
        distinction4: parseFloat(distinction[0].distinction4),
        distinction5: parseFloat(distinction[0].distinction5),
        distinction6: parseFloat(distinction[0].distinction6),
      });
    }
  }, [distinction]);

  useEffect(() => {
    if (distinctionValue) {
      const separation1 = formatToFiveDecimalPlaces(distinctionValue.distinction1 - distinctionValue.distinction0); /* prettier-ignore */
      const separation2 = formatToFiveDecimalPlaces(distinctionValue.distinction2 - distinctionValue.distinction1); /* prettier-ignore */
      const separation3 = formatToFiveDecimalPlaces(distinctionValue.distinction3 - distinctionValue.distinction2); /* prettier-ignore */
      const separation4 = formatToFiveDecimalPlaces(distinctionValue.distinction4 - distinctionValue.distinction3); /* prettier-ignore */
      const separation5 = formatToFiveDecimalPlaces(distinctionValue.distinction5 - distinctionValue.distinction4); /* prettier-ignore */
      const separation6 = formatToFiveDecimalPlaces(distinctionValue.distinction6 - distinctionValue.distinction5); /* prettier-ignore */

      setSeparation({
        separation1,
        separation2,
        separation3,
        separation4,
        separation5,
        separation6,
      });
    }
  }, [distinctionValue]);

  useEffect(() => {
    if (distinctionValue && separation) {
      const standardValue = 1 / 6;

      /* prettier-ignore */
      if (value === distinctionValue.distinction0) {
        // 값이 distinction0 일 때
        setSeparationPercent(0);
        setSeparationFilledPercent(0);
      } 
      else if (value >= distinctionValue.distinction0 && value < distinctionValue.distinction1) {
        // 값이 distinction0 이상 distinction1 미만일 때
        setSeparationPercent(formatToTwoDecimalPlaces(standardValue * ((value - distinctionValue.distinction0) / separation!.separation1) * 100));
        setSeparationFilledPercent(0);
      }
      else if (value >= distinctionValue.distinction1 && value < distinctionValue.distinction2) {
        // 값이 distinction1 이상 distinction2 미만일 때
        setSeparationPercent(formatToTwoDecimalPlaces(standardValue * ((value - distinctionValue.distinction1) / separation!.separation2) * 100));
        setSeparationFilledPercent(formatToTwoDecimalPlaces(1/6 * 100));
      }
      else if (value >= distinctionValue.distinction2 && value < distinctionValue.distinction3) {
        // 값이 distinction2 이상 distinction3 미만일 때
        setSeparationPercent(formatToTwoDecimalPlaces(standardValue * ((value - distinctionValue.distinction2) / separation!.separation3) * 100));
        setSeparationFilledPercent(formatToTwoDecimalPlaces(2/6 * 100));
      }
      else if (value >= distinctionValue.distinction3 && value < distinctionValue.distinction4) {
        // 값이 distinction3 이상 distinction4 미만일 때
        setSeparationPercent(formatToTwoDecimalPlaces(standardValue * ((value - distinctionValue.distinction3) / separation!.separation4) * 100));
        setSeparationFilledPercent(formatToTwoDecimalPlaces(3/6 * 100));
      }
      else if (value >= distinctionValue.distinction4 && value < distinctionValue.distinction5) {
        // 값이 distinction4 이상 distinction5 미만일 때
        setSeparationPercent(formatToTwoDecimalPlaces(standardValue * ((value - distinctionValue.distinction4) / separation!.separation5) * 100));
        setSeparationFilledPercent(formatToTwoDecimalPlaces(4/6 * 100));
      }
      else if (value >= distinctionValue.distinction5 && value < distinctionValue.distinction6) {
        // 값이 distinction5 이상 distinction6 미만일 때
        setSeparationPercent(formatToTwoDecimalPlaces(standardValue * ((value - distinctionValue.distinction5) / separation!.separation6) * 100));
        setSeparationFilledPercent(formatToTwoDecimalPlaces(5/6 * 100));
      }
      else if (value >= distinctionValue.distinction6) {
        // 값이 distinction6 이상일 때
        setSeparationPercent(100);
        setSeparationFilledPercent(formatToTwoDecimalPlaces(6/6 * 100));
      }
    }
  }, [separation]);

  useEffect(() => {
    if (separationFilledPercent !== null) {
      if (element === 'Se') {
        console.log(
          ((1 / 6) * (value - distinctionValue.distinction1)) /
            separation!.separation2
        );
        console.log('separationPercent', separationPercent);
        console.log('separationFilledPercent', separationFilledPercent);
      }
    }
  }, [separationFilledPercent]);

  const totalWidth =
    separationPercent !== null && separationFilledPercent !== null
      ? `${separationPercent + separationFilledPercent}%`
      : '0%';

  return (
    <div className='flex flex-col items-start py-2'>
      <div className='flex'>
        <span className='w-7 text-start text-black text-sm'>{element}</span>
        <span className='w-14 text-start text-black text-sm'>{label}</span>
        <span className='w-20 text-start text-black text-sm'>{value}</span>
      </div>
      <div className='flex justify-start items-center w-[94%] h-5'>
        <div
          className='h-full rounded-tr-full rounded-br-full shadow-md'
          style={{ background: color, width: totalWidth }}
        ></div>
      </div>
      <div className='flex w-full justify-between items-center'>
        <span className='text-black text-[9px]'>
          {distinctionValue?.distinction0}
        </span>
        <span className='text-black text-[9px]'>
          {distinctionValue?.distinction1}
        </span>
        <span className='text-black text-[9px]'>
          {distinctionValue?.distinction2}
        </span>
        <span className='text-black text-[9px]'>
          {distinctionValue?.distinction3}
        </span>
        <span className='text-black text-[9px]'>
          {distinctionValue?.distinction4}
        </span>
        <span className='text-black text-[9px]'>
          {distinctionValue?.distinction5}
        </span>
        <span className='text-black text-[9px]'>
          {distinctionValue?.distinction6}
        </span>
      </div>
    </div>
  );
}

export default ResultItem;
