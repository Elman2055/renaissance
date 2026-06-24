type VolumeSelectorProps = {
  volumes: Record<string, number>;
  selected: string;
  onChange: (volume: string) => void;
};

const VolumeSelector = ({
  volumes,
  selected,
  onChange,
}: VolumeSelectorProps) => {
  return (
    <div className="flex gap-1.5">
      {Object.keys(volumes).map((volume) => (
        <button
          key={volume}
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onChange(volume);
          }}
          className={`rounded-sm border px-2 py-0.5 text-xs font-medium transition-colors ${
            selected === volume
              ? "border-[#8b6914] bg-[#8b6914] text-white"
              : "border-stone-300 text-stone-600 hover:border-[#8b6914] hover:text-[#8b6914]"
          }`}
        >
          {volume.replace(/ml$/, "")}
          <span className="ml-0.5 text-[10px] opacity-80">ml</span>
        </button>
      ))}
    </div>
  );
};

export default VolumeSelector;
