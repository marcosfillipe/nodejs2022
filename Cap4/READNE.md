## Cadastro de Carro

**RF**
Deve ser possivel cadastrar um novo carro.
Deve ser possivel listar todas as categorias.

**RN**
Não deve ser possivel cadastrar um carro com uma placa já existente.
Não deve ser possivel alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padrão, como disponibilidade.
O Usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de Carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíniveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíniveis pelo nome da marca.
Deve ser possível listar todos os carros disponíniveis pelo nome da carro.

**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um cara não cadastrado.
Não deve ser possível cadastrar um especificação já existente para um mesmo carro.
O Usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RN**
Deve ser possível cadastrar a imagem do carro.
Deve ser possivel listar todos os carros.

**RNF**
Ultilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O Usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RN**
Deve ser possível cadstrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
