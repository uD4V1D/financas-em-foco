const calculateProfile = () => {
    const faixaSalarial = document.getElementById('faixaSalarial').value;
    const objetivosInvestimento = document.getElementById('objetivosInvestimento').value;
    const experienciaInvestimentos = document.getElementById('experienciaInvestimentos').value;
  
    let perfilInvestimento = '';
  
    const score = parseInt(faixaSalarial) + parseInt(objetivosInvestimento) + parseInt(experienciaInvestimentos);
    
    if (score <= 3) {
      perfilInvestimento = 'Conservador';
      descricaoPerfil = 'Prioriza a preservação dos seus recursos acima de tudo, investindo em ativos de baixa rentabilidade e evitando riscos.';
    } else if (score > 3 && score <= 6) {
      perfilInvestimento = 'Moderado';
      descricaoPerfil = 'Valoriza a segurança, mas está disposto a abrir mão dela às vezes para ter retornos melhores.';
    } else {
      perfilInvestimento = 'Sofisticado';
      descricaoPerfil = 'Objetiva a maior rentabilidade possível, disposto a assumir maiores riscos e com bom conhecimento sobre os produtos de investimento.';
    }
  
    document.getElementById('profileResult').textContent = `Seu perfil de investimento é: ${perfilInvestimento}`;
    document.getElementById('profileDescription').textContent = descricaoPerfil;
};
