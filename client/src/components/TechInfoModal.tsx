import { useState } from "react";
import { getTechInfo, generateSearchUrl, type TechInfo } from "@/data/technologiesInfo";

interface TechInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  techName: string;
}

export default function TechInfoModal({ isOpen, onClose, techName }: TechInfoModalProps) {
  if (!isOpen) return null;

  const techInfo = getTechInfo(techName);
  const fallbackUrl = generateSearchUrl(techName);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const TypeBadge = ({ type }: { type: string }) => {
    const colors = {
      frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      backend: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      database: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      tool: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      language: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[type as keyof typeof colors] || colors.tool}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    );
  };

  const PopularityIndicator = ({ popularity }: { popularity: string }) => {
    const colors = {
      high: 'text-green-500',
      medium: 'text-yellow-500',
      low: 'text-red-500',
    };

    const dots = popularity === 'high' ? 3 : popularity === 'medium' ? 2 : 1;

    return (
      <div className="flex items-center space-x-1">
        <span className="text-sm text-slate-400">Popularidad:</span>
        <div className="flex space-x-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i <= dots ? colors[popularity as keyof typeof colors] : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      data-testid="tech-modal-backdrop"
    >
      <div 
        className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        data-testid="tech-modal-content"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-white" data-testid="tech-modal-title">
              {techInfo?.name || techName}
            </h2>
            {techInfo && <TypeBadge type={techInfo.type} />}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
            data-testid="tech-modal-close"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {techInfo ? (
            <div className="space-y-6">
              {/* Description */}
              <div>
                <p className="text-slate-300 leading-relaxed" data-testid="tech-description">
                  {techInfo.description}
                </p>
              </div>

              {/* Popularity */}
              <PopularityIndicator popularity={techInfo.popularity} />

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Características Principales</h3>
                <ul className="space-y-2">
                  {techInfo.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2" data-testid={`tech-feature-${index}`}>
                      <i className="fas fa-check text-portfolio-primary mt-1 flex-shrink-0"></i>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Casos de Uso</h3>
                <ul className="space-y-2">
                  {techInfo.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start space-x-2" data-testid={`tech-usecase-${index}`}>
                      <i className="fas fa-arrow-right text-portfolio-secondary mt-1 flex-shrink-0"></i>
                      <span className="text-slate-300">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-700">
                <a
                  href={techInfo.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-portfolio-primary hover:bg-portfolio-primary/80 text-white rounded-lg transition-colors"
                  data-testid="tech-official-link"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Documentación Oficial
                </a>
                <a
                  href={generateSearchUrl(techInfo.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  data-testid="tech-search-link"
                >
                  <i className="fas fa-search mr-2"></i>
                  Buscar Tutoriales
                </a>
              </div>
            </div>
          ) : (
            /* Fallback for unknown technologies */
            <div className="text-center space-y-4">
              <div className="text-6xl text-slate-600">
                <i className="fas fa-question-circle"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">Información no disponible</h3>
              <p className="text-slate-300">
                No tengo información detallada sobre <strong>{techName}</strong>, 
                pero puedes buscar más información en los enlaces de abajo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={fallbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-portfolio-primary hover:bg-portfolio-primary/80 text-white rounded-lg transition-colors"
                  data-testid="tech-fallback-search"
                >
                  <i className="fas fa-search mr-2"></i>
                  Buscar en Google
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}