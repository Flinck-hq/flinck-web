import Image from "next/image";

interface DeviceFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export function DeviceFrame({
  src,
  alt,
  width = 400,
  height = 866,
  priority,
  className,
}: DeviceFrameProps) {
  return (
    <div className={`device-frame mx-auto w-full max-w-[320px] ${className ?? ""}`}>
      <div className="device-screen">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          priority={priority}
          sizes="(max-width: 768px) 280px, 320px"
        />
      </div>
    </div>
  );
}
