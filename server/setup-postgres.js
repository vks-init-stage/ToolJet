const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function lsExample() {
  try {
    const { stdout, stderr } = await exec('apt install postgresql build-essential postgresql-contrib -y && /etc/init.d/postgresql start && su -c "psql -c \\"ALTER USER postgres PASSWORD \'postgres\';\\"" postgres && npm run db:create && npm run db:migrate');
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
  } catch (e) {
    console.error(e);
  }
}

module.exports = async () => {
    await lsExample()
}
