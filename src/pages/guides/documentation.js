import React from 'react';

const documentation = () => {
  const items = [
    {
      title: 'Élire le conseil',
      paragraph:
        'Les élections municipales sont destinées à élire le conseil municipal d’une commune. Au Sénégal, il y a plus de 500 communes différentes. Elles sont toutes administrées par un maire et ses adjoints. Le conseil municipal peut être composé de conseillers municipaux appartenant à la majorité et de conseillers municipaux appartenant à l’opposition.',
    },
    {
      title: 'Le mode de scrutin',
      paragraph:
        'uite à la modification du Code électoral n°2021-35 du 23 Juillet 2021, pour la première fois l’élection du maire se fera au suffrage universel direct : ce ne sont plus les conseillers qui vont élire le maire, mais les citoyens directement.',
    },
    {
      title: 'Le conseil municipal',
      paragraph: 'Le conseil municipal est composé de conseillers municipaux.',
    },
    {
      title: 'Les conseillers municipaux',
      paragraph:
        'Les conseillers municipaux sont des personnels de législation et de services publics.',
    },
    {
      title: 'Élire le conseil',
      paragraph:
        'Les élections municipales sont destinées à élire le conseil municipal d’une commune. Au Sénégal, il y a plus de 500 communes différentes. Elles sont toutes administrées par un maire et ses adjoints. Le conseil municipal peut être composé de conseillers municipaux appartenant à la majorité et de conseillers municipaux appartenant à l’opposition.',
    },
    {
      title: 'Le mode de scrutin',
      paragraph:
        'uite à la modification du Code électoral n°2021-35 du 23 Juillet 2021, pour la première fois l’élection du maire se fera au suffrage universel direct : ce ne sont plus les conseillers qui vont élire le maire, mais les citoyens directement.',
    },
  ];
  return (
    <div className="bg-white p-6">
      <div className="mt-6 mb-10">
        <h1 className="text-3xl mb-3 font-bold uppercase">
          Documentation Onboarding
        </h1>
        <p>dernière mise à jour : {Date.now}</p>
      </div>
      <div className="flex">
        <ol className="w-4/5">
          {items.map((item, index) => (
            <li key={index}>
              <h3 className="text-sm font-medium py-4 uppercase">
                {index}. {item.title}
              </h3>
            </li>
          ))}
        </ol>

        <div>
          {items.map((item, index) => (
            <div key={index} className="p-4">
              <h2 className="text-2xl font-medium mb-4">{item.title}</h2>
              <p className="text-md text-whitesmoke">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default documentation;
