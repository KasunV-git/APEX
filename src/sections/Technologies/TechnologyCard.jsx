import Card from '../../components/ui/Card';
import * as FaIcons from 'react-icons/fa';

const TechnologyCard = ({ tech }) => {
  const Icon = FaIcons[tech.icon] || FaIcons.FaMicrochip;

  return (
    <Card className="hover:border-primary/50 transition-colors duration-300">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {tech.description}
      </p>
    </Card>
  );
};

export default TechnologyCard;
