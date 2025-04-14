export const ChallengeState = ({ state }: { state: string }) => {
  return (
    <div className="flex w-full justify-center items-center p-8 italic text-gray-700 dark:text-gray-300 capitalize">
      {state}
    </div>
  );
};
