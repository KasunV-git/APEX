import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const VehicleCard = ({ vehicle }) => {
  return (
    <Card className="flex flex-col h-full group">
      <div className="relative h-48 md:h-64 mb-6 overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center">
        {/* Placeholder for actual image */}
        <div className="text-gray-600 font-bold uppercase tracking-widest text-2xl group-hover:scale-110 transition-transform duration-500">
          {vehicle.name}
        </div>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-1">{vehicle.name}</h3>
        <p className="text-primary text-sm font-semibold mb-4 uppercase tracking-wider">{vehicle.type}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-500 text-xs uppercase mb-1">Range</p>
            <p className="text-white font-medium">{vehicle.range}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase mb-1">Acceleration</p>
            <p className="text-white font-medium">{vehicle.acceleration}</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
        <span className="text-xl font-bold">{vehicle.price}</span>
        <Button variant="outline" className="py-2 px-4 text-sm">Configure</Button>
      </div>
    </Card>
  );
};

export default VehicleCard;
