import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const VehicleCard = ({ vehicle, onClick }) => {
  return (
    <Card 
      onClick={() => onClick && onClick(vehicle)}
      className="flex flex-col h-[520px] p-6 cursor-pointer group hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] transition-all duration-500"
    >
      {/* 1. Image Area (220px fixed height) */}
      <div className="relative h-[220px] shrink-0 mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-surface to-background border border-glass-border flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
        {/* Placeholder text mimicking a 3D model/image */}
        <div className="text-text-muted font-heading uppercase tracking-widest text-2xl group-hover:scale-110 transition-transform duration-700 ease-out z-10">
          {vehicle.name}
        </div>
        {/* Decorative lighting */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-primary/20 blur-[30px]"></div>
      </div>
      
      {/* 2. Vehicle Name Area */}
      <div className="mb-5 text-left">
        <h3 className="text-[32px] font-bold font-heading leading-none mb-1">{vehicle.name}</h3>
        <p className="text-[14px] text-text opacity-70 tracking-wider uppercase font-semibold">{vehicle.category}</p>
      </div>
      
      {/* 3. Metrics Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-[28px] font-semibold text-text leading-tight">{vehicle.range}</p>
          <p className="text-[12px] text-text opacity-60 uppercase tracking-widest mt-1">Range</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-[28px] font-semibold text-text leading-tight">{vehicle.acceleration}</p>
          <p className="text-[12px] text-text opacity-60 uppercase tracking-widest mt-1">0-100 km/h</p>
        </div>
      </div>
      
      {/* 4. Button Positioning & Divider */}
      <div className="mt-auto pt-6 border-t border-glass-border flex justify-center">
        <Button className="w-full py-4 text-sm font-bold tracking-widest uppercase bg-surface hover:bg-primary hover:text-background border border-glass-border transition-colors shadow-none group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          Configure
        </Button>
      </div>
    </Card>
  );
};

export default VehicleCard;
