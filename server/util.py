from argparse import ArgumentParser

from src import db

parser = ArgumentParser()
parser.add_argument('f_name')

def _init_db():
    print('Init DB')
    db.create_all()

functions = {
    'init_db': _init_db
}

if __name__ == '__main__':
    args = parser.parse_args()
    functions[args.f_name]()