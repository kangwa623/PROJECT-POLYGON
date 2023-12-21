import os
from langchain.utilities import SQLDatabase
from langchain.llms import OpenAI
from langchain_experimental.sql import SQLDatabaseChain

os.environ["OPENAI_API_KEY"] = "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"
db = SQLDatabase.from_uri("mysql+pymysql://root:0964475128@127.0.0.1/hospital_sys_dbs")
llm = OpenAI(temperature=0, verbose=False)
db_chain = SQLDatabaseChain.from_llm(llm, db, verbose=True)

db_chain.run('How many tables does this database have?')

# os.environ["OPENAI_API_KEY"] = "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"
# db = SQLDatabase.from_uri("mysql+pymysql://root:0964475128@127.0.0.1/hospital_sys_dbs")
# llm = OpenAI(temperature = 0) 
# db_chain = SQLDatabaseChain(llm=llm, database=db, verbose=True)

