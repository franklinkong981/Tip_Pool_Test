describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
    let rows = serverTbody.children;
    expect(rows.length).toEqual(1);
    let cells = rows[0].children;
    expect(cells.length).toEqual(2);
    
    expect(rows[0].id).toEqual('server1');
    expect(cells[0].innerText).toEqual('Alice');
    expect(cells[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    // teardown logic
    serverId--;
    delete allServers['server' + serverId];
    //We remove the one tr element we added to the DOM.
    serverTbody.children[0].remove();
  });
});
